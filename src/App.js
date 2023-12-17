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
    statusReports : "Monthly Status Reports",
    iconEnable : "bi bi-check-lg",
    iconDisable :"bi bi-x",
    opacityHead : "opacity-75",
    opacityDisable : "opacity-50"
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


function CardFree ({feature}) {
  
  return (
    <div class = "card" >
      <div class = "headingAlign" >
        <div class = "card-header" >
        {/* <h6 style = {opacityHead} >FREE</h6> */}
        <h6 class = {feature.opacityHead} >FREE</h6>
        <h5 class = "card-title" >$0/month</h5>
      </div>   
      </div>
      <div class = "card-body" >
        <div class = "features" >
        <p  > <i class = {feature.iconEnable} ></i> {feature.user} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.storage} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.publicProjects} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.access} </p>
        <p class = {feature.opacityDisable}  > <i class = {feature.iconDisable} ></i> {feature.privateProjects} </p>
        <p class = {feature.opacityDisable}  > <i class = {feature.iconDisable} ></i> {feature.PhoneSupport} </p>
        <p class = {feature.opacityDisable}  > <i class = {feature.iconDisable} ></i> {feature.subDomain} </p>
        <p class = {feature.opacityDisable}  > <i class = {feature.iconDisable} ></i> {feature.statusReports} </p>
        </div>
      </div>
      <button  type = "button" class = "btn btn-primary , bottom-button "  >BUTTON</button>
    </div>
  );
}

function CardPlus ({feature}) {

  return (
    <div class = "card" >
      <div class = "headingAlign" >
        <div class = "card-header" >
        <h6 class = {feature.opacityHead} >PLUS</h6>
        <h5 class = "card-title" >$9/month</h5>
      </div>   
      </div>
      <div class = "card-body" >
        <div class = "features" >
        <p  > <i class = {feature.iconEnable}  ></i> {feature.userPlus} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.storage} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.publicProjects} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.access} </p>
        <p  > <i class = {feature.iconEnable} ></i>  {feature.privateProjects} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.PhoneSupport} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.subDomain} </p>
        <p class = {feature.opacityDisable}  > <i class = {feature.iconDisable} ></i> {feature.statusReports} </p>
        </div>
      </div>
      <button  type = "button" class = "btn btn-primary , bottom-button "  >BUTTON</button>
    </div>
  );
}

function CardPro ({feature}) {


  return (
    <div class = "card" >
      <div class = "headingAlign" >
        <div class = "card-header" >
        <h6 class = {feature.opacityHead} >PRO</h6>
        <h5 class = "card-title" >$49/month</h5>
      </div>   
      </div>
      <div class = "card-body" >
        <div class = "features" >
        <p  > <i class = {feature.iconEnable}  ></i> {feature.userPro} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.storage} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.publicProjects} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.access} </p>
        <p  > <i class = {feature.iconEnable} ></i>  {feature.privateProjects} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.PhoneSupport} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.subDomain} </p>
        <p  > <i class = {feature.iconEnable} ></i> {feature.statusReports} </p>
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
          return <CardFree feature = {feature} />
        })}
        {features.map((feature) => {
          return <CardPlus feature = {feature} />
        })}
        {features.map((feature)=>{
          return <CardPro feature = {feature} />
        })}
    </div>
  );
}

export default App;
