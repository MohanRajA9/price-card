import logo from './logo.svg';
import './App.css';

const FEATURES_OF_PRODUCT = [
  {
    user : "Single User",
    userPlus : "5 User",
    userPro : "Unlimited User",
    storage : "50GB Storage",
    publicProjects : "Unlimited Public Projects",
    access : "community Access",
    privateProjects : "Unlimited Private Projects",
    PhoneSupport : "Dedicated Phone Support",
    subDomain : "Free Subdomain",
    statusReports : "Monthly Status Reports"
  }
]

function App() {
const features = FEATURES_OF_PRODUCT
  return (
    <div className="App">
      
      <div class = "container-fluid" >
        <Page />
      </div>
      {/* <div class = "container" >
        {features.map((feature) => {
          return <Card feature = {feature} />
        })}
      </div> */}
    </div>
  );
}


function Card ({feature}) {

  const opacityHead ={
    opacity : .6
  }
  const opacity ={
    opacity : .4
  }
  return (
    <div class = "card" >
      <div class = "headingAlign" >
        <div class = "card-header" >
        <h6 style = {opacityHead} >FREE</h6>
        <h5 class = "card-title" >$0/month</h5>
      </div>   
      </div>
      <div class = "card-body" >
        <div class = "features" >
        <p  > <i class = "bi bi-check"  ></i> {feature.user} </p>
        <p  > <i class = "bi bi-check" ></i> {feature.storage} </p>
        <p  > <i class = "bi bi-check" ></i> {feature.publicProjects} </p>
        <p  > <i class = "bi bi-check" ></i> {feature.access} </p>
        <p style = {opacity}  > <i class = "bi bi-x" ></i> {feature.privateProjects} </p>
        <p style = {opacity}  > <i class = "bi bi-x" ></i> {feature.PhoneSupport} </p>
        <p style = {opacity}  > <i class = "bi bi-x" ></i> {feature.subDomain} </p>
        <p style = {opacity}  > <i class = "bi bi-x" ></i> {feature.statusReports} </p>
        </div>
      </div>
      <button  type = "button" class = "btn btn-primary , bottom-button "  >BUTTON</button>
    </div>
  );
}

function Page () {
  const features = FEATURES_OF_PRODUCT
  return (
    <div className = "page" >
              {features.map((feature) => {
          return <Card feature = {feature} />
        })}
                      {features.map((feature) => {
          return <Card feature = {feature} />
        })}

         {features.map((feature) => {
          return <Card feature = {feature} />
        })}
    </div>
  );
}

export default App;
