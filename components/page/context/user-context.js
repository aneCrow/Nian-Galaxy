import React from "react";

export const defaultUser = {
    isGuest:true,
    name: 'user',
    bio: '',
    avatar: '',
    notes: []
};

export const UserContext = React.createContext({
    user:defaultUser,
    createUser: () => {},
    editUser: () => {}
});