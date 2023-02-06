export interface User {
	userName: string;
	email: string;
	password: string;
	Friends: any[];
	pendingRequest: any[];
	notification: any[];
}

export interface AddFriend {
	name: string;
	userID: string;
	requestSenderID: string;
	requestSenderName: string;
	conversation: any[];
	isPending: boolean;
}

export interface Chats {
	sender: string;
	reciever: string;
	message: string;
	senderName: string;
}

export interface Notifications {
	title: string;
	Whorecieved: string;
	Whosend: string;
}
