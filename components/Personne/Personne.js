import React, {Component} from 'react';
import AgePersonne from './AgePersonne/AgePersonne';
import classes from "./Personne.module.css"; //module permet de ne cibler les classes que pour cette page uniquement

class Personne extends Component {
    render(){
        const monStyle = {
            backgroundColor:"green",
            color:"white"
        }

        monStyle.fontSize = "14px";
        
        if(this.props.sexe){
            monStyle.backgroundColor="blue";
        }else{
            monStyle.backgroundColor="red";
        }
        
        return (
            <>
                <h1 className={classes.monTitre}>{this.props.nom}</h1>
                <AgePersonne age={this.props.age}/>
                <div style={monStyle}>Sexe : {this.props.sexe ? "Homme" : "Femme"}</div> 
            </>
        );
    }
    
}

export default Personne;