import React from 'react';
import './index.css';

function data(props) {
    return (
        <div className="table-responsive" key={props.topLevelDomain}>
<table className="table table-dark table-bordered  align-middle">
<thead>
  <tr>
    <th scope="col">Flag</th>
    <th scope="col">Name</th>
    <th scope="col">Capital</th>
    <th scope="col">Region</th>
    <th scope="col">Subregion</th>
    <th scope="col">Population</th>
    <th scope="col">borders</th>
    <th scope="col">Languages</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><img src={props.flag} alt="Country-Flag" width="30px" height="15px"></img></td>
    <td>{props.name}</td>
    <td>{props.capital}</td>
    <td>{props.region}</td>
    <td>{props.subregion}</td>
    <td>{props.population}</td>
    <td>{props.borders}</td>
    <td>{props.languages[0].name}</td>
  </tr>
</tbody>
</table>
</div>
    )
}

export default data
