import React, { Component, Fragment } from "react";
import axios from "axios";

export default class SingleRepository extends Component {
  state = {
    loading: true,
    repository: []
  };

  async componentDidMount() {
    try {
      const url = `http://localhost:5000/repository_id/${this.props.id}`;
      const { data } = await axios.get(url);
      this.setState({
        repository: data,
        loading: false
      });
    } catch (_) {}
  }

  async componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      try {
        const url = `http://localhost:5000/repository_id/${this.props.id}`;
        const { data } = await axios.get(url);
        this.setState({
          repository: data,
          loading: false
        });
      } catch (_) {}
    }
  }

  singleRepo = repository => (
    <Fragment key={repository.id}>
      <ul>
        <li>id: {repository.id}</li>
        <li>node_id: {repository.node_id}</li>
        <li>name: {repository.name}</li>
        <li>private: {repository.private}</li>
        <li>description: {repository.description}</li>
        <li>url: {repository.url}</li>
      </ul>
    </Fragment>
  );

  render() {
    const { repository, loading } = this.state;
    return (
      <div>
        <h4> Repository </h4>
        {loading ? (
          <h5>Loading ......</h5>
        ) : (
          <div>{this.singleRepo(repository)}</div>
        )}
      </div>
    );
  }
}
