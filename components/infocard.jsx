function InfoCard(props) {

    return <>
        <div>
            <span ><h2>{props.record.title}</h2></span><br />
            <span >{props.record.subtitle}</span>
        </div>
    </>
}

export default InfoCard;