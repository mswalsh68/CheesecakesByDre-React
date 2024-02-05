import '../App.css'

export default function Card(props) {


  return (

    
    <div className='card'>
        <p><b>{props.item.title}</b></p>
        <img className="cardImg" src={props.item.coverImg} />
        <p>{props.item.description}</p>
        <p><b>Small - ${props.item.smallprice.toFixed(2)}</b></p>
        <p><b>Large - ${props.item.largeprice.toFixed(2)}</b></p>
        <p><b>Slice - ${props.item.sliceprice.toFixed(2)}</b></p>
    </div>
    
  )
}


