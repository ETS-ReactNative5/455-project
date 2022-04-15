import {
  gql
} from "@apollo/client";



export const SERVER_URL =
  'https://membersdev.brellavida.com/app/graphql';

export const PING_QUERY = gql`
query Ping {
    Ping
}
`;

export const SIGN_IN_MUTATION = gql`
mutation SignIn ($username: String!, $password: String!) {
    JwtLogin (username: $username, password: $password) {
        token
        message
    }
}
`;

// export const CONFIG_QUERY = gql`
// query Config ($version: String!) {
// 	AppUpdateRequired (version: $version) {
// 		updateRequired
// 	}
// 	Config {
// 		reservationDefaultLength
// 	}
// }
// `;

// export const MEMBER_QUERY = gql`
// query Member {
//     Me {
//         email
//         firstName
//         lastName
// 				familiarName
//         name
//         # reservations {
//         #     reservationId
//         #     start
//         #     guestCount
//         # }
//         membershipTier {
//             tier
// 						name
// 						yearly
// 						monthly
//         }
//         maxGuests
//         costPerGuest {
//             quantity
//             totalCost
//         }
//     }
// 		VisitCurrent {
//         visitId
// 				reservation {
// 					reservationId
// 					start
// 					end
// 					guestCount
// 				}
//         started
// 				ended
//         guestCount
//     }
//     VisitState {
//         visitStatus
//         reason
//     }
// }
// `;





