import ResultSelectOption from '../components/resultselectoption';
import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
function ResultSelectBox(props) {


    //
    //value={(props.results.length > 0 ? props.results[0].key : "")}
    return (<>
        <NativeSelect id="searchMenu" defaultValue="0" onChange={(e => props.select(e.target.value))}>
            {props.results.map(result =>
                <ResultSelectOption id={result.key} value={result.key} key={result.key} title={result.title} author_name={result.author_name} />
            )}
        </NativeSelect></>
    )
}
export default ResultSelectBox;