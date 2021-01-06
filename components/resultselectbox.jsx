import ResultSelectOption from '../components/resultselectoption';
import React from 'react';
function ResultSelectBox(props) {



    return (
        <select onChange={e => props.select(e.target.value)}>
            {props.results.map(result =>
                <ResultSelectOption id={result.key} value={result.key} key={result.key} title={result.title} author_name={result.author_name} />
            )}
        </select>
    )
}
export default ResultSelectBox;