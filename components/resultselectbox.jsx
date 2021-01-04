import ResultSelectOption from '../components/resultselectoption'
function ResultSelectBox(props) {


    return (
        <select>
            {props.results.map(result =>
                <ResultSelectOption key={result.key} value={result.key} title={result.title} author_name={result.author_name} />
            )}
        </select>
    )
}
export default ResultSelectBox;