
export default function BuisnessCardDisplay(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.email}</h3>
        </div>
    )

}

//-- another option
// function BuisnessCardDisplay(name, email){
//     return (
//         <div>
//             <h1>{name}</h1>
//             <h3>{email}</h3>
//         </div>
//     )
// }