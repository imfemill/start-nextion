export const gqlBody = {
    getUser(payload) {
        return {
            query: `query Users($input: GetUserInput!) {
        user(input: $input) {
          response {
            _id
            email
            photo
            firstName
            lastName
            companyName
            role
            emailVerified
            emailVerificationToken
            createdAt
            updatedAt
            financialInstitute
            phone
            agentTwilioNumber
            type
            appPassword
            activityLogPermission
          }
          type
          message
          code
        }
      }`,
            variables: {
                input: {
                    _id: payload
                }
            }
        };
    },
    addUser(payload) {
        return {
            query: `mutation Mutation($input: AddUserInput!) {
        addUser(input: $input) {
          type
          message
          code
        }
      }`,
            variables: {
                input: payload
            }
        };
    },
    editUser(payload) {
        return {
            query: `mutation EditUser($input: EditUserInput!) {
        editUser(input: $input) {
          type
          message
          code
        }
      }`,
            variables: {
                input: {
                    _id: payload?.id,
                    email: payload?.email,
                    firstName: payload?.firstName,
                    lastName: payload?.lastName,
                    role: payload?.role,
                    phone: payload?.phone,
                    financialInstitute: payload?.financialInstitute,
                    phoneNumber: payload?.phoneNumber,
                    companyName: payload?.companyName
                }
            }
        };
    },
    deleteUser(payload) {
        return {
            query: `mutation Mutation($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          type
          message
          code
          totalAssignedLeads
        }
      }`,
            variables: {
                input: payload
            }
        };
    }
};
