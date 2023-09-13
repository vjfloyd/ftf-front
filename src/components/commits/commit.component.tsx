import axios from "axios";
import { useEffect, useState } from "react";
import { Commit } from "../../models/commit";

const Commits = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    (async (done) => {
      const { data } = await axios.get("/commits");
      console.log(data);
      setCommits(data);
    })();
  }, []);

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {commits.map((commit: Commit) => {
              return (
                <tr key={commit.id}>
                  <td>{commit.author}</td>
                  <td>{commit.email}</td>
                  <td>{commit.message}</td>
                  <td>{commit.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Commits;
