import React, {Component} from 'react';
import classes from "./Horloge.module.css";

class Horloge extends Component {
    // constructor(props){              Ancienne façon d'écrire state = {date: Date(),}
    //     super(props);
    //     this.state = {date:new Date()};
    // }
    
    state = {               // 1ere étape :constructor se lance et génère 1ère base
        date: new Date(),
        compteur : 1
    }
    
    tick = () => {
        this.setState((oldState,props) => {  // == function(oldState,props) met en fléché
            return {
                date:new Date(),
                compteur : oldState.compteur + 1
            }
        });
    }

    componentDidMount(){    // 3e étape : le composant est monté, je lance le timer
        this.timerID = setInterval(() => this.tick(), 1000);  // setState permet de mettre à jour les données
    }

    componentWillMount(){   // 4e étape : on nettoie l'intervalle avant le démontage
        clearInterval(this.timerID);
    }

    render(){               // 2e étape : on affiche le composant une première fois
        return (
            <>
                <h2 className={classes.monTitre}> Horloge : {this.state.date.toLocaleTimeString()}</h2>
                <div>Compteur : {this.state.compteur}</div>
            </>
        );
    }
}

export default Horloge;