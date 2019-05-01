import React, { Component } from "react";
import axios from "axios";

export default class SingleRepository extends Component {
  state = {
    loading: true,
    repository: []
  };

  componentDidMount() {
    this.getData(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getData(this.props);
    }
  }

  getData = async ({ id }) => {
    try {
      const url = `http://localhost:5000/repository_id/${id}`;
      const { data } = await axios.get(url);
      this.setState({
        repository: data,
        loading: false
      });
    } catch (_) {}
  };

  singleRepo = items =>
    Object.entries(items).map(([k, value], i) => {
      return typeof value !== "object" ? (
        <div key={k + i} className="list-group-item">
          <strong>{k}</strong>: {value}
        </div>
      ) : (
        <div key={k + i} className="list-group-item">
          <strong>{k}</strong>: {typeof value}
        </div>
      );
    });

  render() {
    const { repository, loading } = this.state;
    return (
      <div>
        <h4> Repository </h4>
        {loading ? (
          <h5>Loading ......</h5>
        ) : (
          <div className="list-group">{this.singleRepo(repository)}</div>
        )}
      </div>
    );
  }
}
