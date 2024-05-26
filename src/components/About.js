import React from "react";
import TeamMember from "./TeamMember";

class About extends React.Component {

    constructor() {
        super();

        this.state = {
            teamMembers: []
        }
    }

    async componentDidMount() {
        const response = await fetch(process.env.REACT_APP_BASE_API + 'Teams');
        const json = await response.json();
        this.setState({
            teamMembers: json
        });
    }

    render() {
        return (
            <div className="p-5">
                {this.state.teamMembers.map(member => (
                    <TeamMember key={member.id} member={member}/>
                ))}
            </div>
        )
    }
}

export default About;