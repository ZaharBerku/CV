import { useRef, useEffect } from "react";

type EventHandler = (event: Event | MouseEvent) => void;

const useEventListener = (
  eventName: string,
  handler: EventHandler,
  element: HTMLElement | Window = window
): void => {
  const savedHandler = useRef<EventHandler>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event | MouseEvent) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export { useEventListener };
