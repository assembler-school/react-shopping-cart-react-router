import React from "react";

import AppHeader from "../../components/AppHeader";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import NewProductForm from "../../components/NewProductForm";

class NewProduct extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          submitted: false
        }
        this.setSubmitted = this.setSubmitted.bind(this); 
    }

    
      setSubmitted() {
        setTimeout(() => {
          this.setState({
            submitted: true,
          });
        }, 500);
      }

render(){
  const {submitted} = this.state;
const{saveNewProduct}=this.props
{submitted && <Redirect to="/" />}
  return (
   
    <>
      <AppHeader />
      <Main className="container">
        <div className="row justify-content-center">
          <div className="col col-8">
            <div className="row">
              <header className="col col-12">
                <h1>New product</h1>
              </header>
              <div className="col col-12">
                <hr />
              </div>

              <div className="col col-12">
                <NewProductForm saveNewProduct={saveNewProduct} />
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
}


export default NewProduct;
