import React, { useEffect, useState, useRef } from "react";
import MessageCard from "../MessageCard";
import styles from "./styles.module.css";

import Loader from "../Loader";

function Messages({ user, messages, isLoading, setReply, style }) {
    const [currentID, setCurrentID] = useState("");
    const messagesBox = useRef();
    const scrollBottom = (e) => {
        e.scrollTop = e.scrollHeight;
    };

    useEffect(() => {
        if (messagesBox.current !== null) {
            scrollBottom(messagesBox.current);
        }
    });
    // useEffect(() => {}, [currentID]);
    return (
        <div style={style} className={styles.messages} ref={messagesBox}>
            {isLoading ? (
                <Loader />
            ) : (
                messages.map((message, i) => {
                    return (
                        <MessageCard
                            {...{
                                ...message,
                                me: user.id === message.user.id,
                                setReply,
                                setCurrentID,
                                currentID,
                            }}
                            key={i}
                        />
                    );
                })
            )}
        </div>
    );
}

export default Messages;
