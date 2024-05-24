import React from "react";

class TeamMember extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {name, designation, about, imageUrl} = this.props.member

        return (
            <div className="member-card">
                <img className="member-card-img" alt={name} src={imageUrl}/>
                <h2>{name}</h2>
                <h3>{designation}</h3>
                <p>{about}</p>
            </div>
        )
    }
}

export default TeamMember;