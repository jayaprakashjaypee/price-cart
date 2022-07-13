
import './App.css';

function App() {
  return (
    <div className="card-list">
   {/* <CardBody />
   <CardBody />
   <CardBody /> */}

   {data.map((plan) => {
      return <CardBody plan={plan.plan} price={plan.price} stats={plan.stats}/>
   })}

    </div>
  );
}

export default App;

//info array

const data = [
  {
   plan : 'FREE',
   price : 0,
   stats: [
     '✔ Single User',
     '✔ 5GB Storage',
     '✔ Unlimited Public Projects',
     '✔ Community Access',
     '✖ Unlimited Private Projects',
     '✖ Dedicated Phone Support',
     '✖ Free Subdomain',
     '✖ Monthly Status Reports'
   ]
  },
  {
    plan : 'PLUS',
    price : 9,
    stats: [
      '✔ 5 Users',
      '✔ 50GB Storage',
      '✔ Unlimited Public Projects',
      '✔ Community Access',
      '✔ Unlimited Private Projects',
      '✔ Dedicated Phone Support',
      '✔ Free Subdomain',
      '✖ Monthly Status Reports'
    ]
   },
   {
    plan : 'PRO',
    price : 49,
    stats: [
      '✔ Unlimited Users',
      '✔ 150GB Storage',
      '✔ Unlimited Public Projects',
      '✔ Community Access',
      '✔ Unlimited Private Projects',
      '✔ Dedicated Phone Support',
      '✔ Unlimited Free Subdomain',
      '✔ Monthly Status Reports'
    ]
   }
];



//card price component

function CardPrice({plan, price}) {
return (
  <div className="card-price">
    <h4>{plan}</h4>
    <h1>${price}<span style={{fontSize :'20px', fontWeight :'lighter'}}>/month</span></h1>
  </div>
);
}

//card details 


function CardDetails({stats}) {

  
  return(
    <div className="card-details">

    {stats.map((info) => {
        return <p>{info}</p>
       })}


      {/* <p>✔ Single User</p>
      <p>✔ 5GB Storage</p>
      <p>✔ Unlimited Public Projects</p>
      <p>✔ Community Access</p>
      <p>✖ Unlimited Private Projects</p>
      <p>✖ Dedicated Phone Support</p>
      <p>✖ Free Subdomain</p>
      <p>✖ Monthly Status Reports</p> */}
    </div>
  );
}

//card button

function CardButton() {
  return(
    <button><h2>Subscribe</h2></button>
  );
}

// complete card

function CardBody(props) {
  return(
    <div className="card-body">
    <CardPrice plan={props.plan} price={props.price}/>
    <CardDetails stats={props.stats}/>
    <CardButton />
    </div>
  );
}