import * as React from "react";
import * as Scrivito from "scrivito";

class Content extends Component {
   render(){
     return (
      <div>
        <div className="text-center">
        Hello World</div>
      </div>
    );
  }
}

export default Scrivito.connect(Content);