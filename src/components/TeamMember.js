import React from "react";

class TeamMember extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {name, designation, about, imageUrl} = this.props.member

        return (
            <div className="flex mx-10 my-5">
                <div className="mx-5 w-[120px] h-[150px]">
                    <img className="w-full h-full rounded-lg" alt={name} src={imageUrl}/>
                </div>
                <div className="mx-5 w-[600px]">
                    <h2 className="font-bold">{name}</h2>
                    <h3 className="font-semibold">{designation}</h3>
                    <p>{about}</p>
                </div>
            </div>
        )
    }
}

export default TeamMember;