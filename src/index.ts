import React, { useEffect, useRef, useState } from "react";

export type CallbackType<S> = (data: S) => void;
export type useCallbackStateInitiail = <S>(initialState: S | (() => S)) => [S, (data: React.SetStateAction<S>, callback?: CallbackType<S>) => void];
export type useCallbackStateType = useCallbackStateInitiail;

export const useCallbackState: useCallbackStateType = <S>(initialState: S | (() => S)) => {

    const callbackRef = useRef<CallbackType<S>>();
    const [data, setData] = useState(initialState);

    useEffect(() => {
        callbackRef.current && callbackRef.current(data);
    }, [data]);

    return [
        data,
        (data: React.SetStateAction<S>, callback?: CallbackType<S>) => {
            callbackRef.current = callback;
            setData(data);
        }
    ];
}