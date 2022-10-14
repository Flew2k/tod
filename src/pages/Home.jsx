import React from "react";

import { Card } from "../components/Card";
import { Header } from "../components/Header";

export const Home = (props) => {

    const change = (e) => {
        console.log(e.target.value)
    }
    const styles = {
        container: {
            width: "100vw",
            display: 'flex',
            height: 790,
            alignItems: "center",
            paddingTop: 100,
            flexDirection: 'column'
        },
        searchSection: {
            display: "flex",
            flexDirection: "row",
            alignItems: 'center',
            gridGap: 20
        },    
        input: {
            width: 550,
            height: 40,
        }
    }
    return (
        <div>
            <Header />
            <div style={styles.container}>
                <h1>ToDo Lists</h1>
                <div style={styles.searchSection}>
                    <input placeholder="New task" onChange={change} style={styles.input} />
                    <button onClick={() => console.log('hehe')} >add</button>
                </div>
                <Card task="hehhehe"/>
            </div>
        </div>
    )
}