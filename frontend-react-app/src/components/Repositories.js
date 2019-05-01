import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

// Stateless Functional Component
const Repositories = props => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `http://localhost:5000/repository/${props.query}`;
    const getRepo = async () => {
      try {
        const { data } = await axios.get(url);
        setRepositories(data.items);
        setLoading(false);
      } catch (_) {}
    };
    getRepo();
  }, [props.query]);

  const repos = items =>
    items.map((item, i) => {
      return (
        <Fragment key={item.id}>
          <p> </p>
          <h4> Item {i + 1}.</h4>
          <ul key={item.id}>
            <li>id: {item.id}</li>
            <li>node_id: {item.node_id}</li>
            <li>name: {item.name}</li>
            <li>private: {item.private}</li>
            <li>description: {item.description}</li>
            <li>url: {item.url}</li>
          </ul>
        </Fragment>
      );
    });

  return (
    <div onSubmit={e => this.onSubmit(e)}>
      {loading ? <h5> Loading ...</h5> : <>{repos(repositories)}</>}
    </div>
  );
};

export default Repositories;
