import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const SavedRepositories = () => {
  const [loading, setLoading] = useState(true);
  const [savedRepositories, setSavedRepositories] = useState([]);

  useEffect(() => {
    const getSavedRepo = async () => {
      try {
        const {
          data: { bookmarkedRepositories }
        } = await axios.get(`http://localhost:5000/save-repos`);
        setSavedRepositories(bookmarkedRepositories);
        setLoading(false);
      } catch (_) {}
    };
    getSavedRepo();
  }, []);

  const repoData = items =>
    items.map((item, i) => (
      <Fragment key={item.id}>
        <p> </p>
        <h4> Item {i + 1}.</h4>
        <li>id: {item.id}</li>
        <li>node_id: {item.node_id}</li>
        <li>name: {item.name}</li>
        <li>private: {item.private}</li>
        <li>description: {item.description}</li>
        <li>url: {item.url}</li>
      </Fragment>
    ));

  return (
    <div>
      <div>
        <h3>Total saved Repositories: {savedRepositories.length}</h3>
        <div>
          {loading ? (
            <h5> Loading ...</h5>
          ) : (
            <Fragment>{repoData(savedRepositories)}</Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedRepositories;
