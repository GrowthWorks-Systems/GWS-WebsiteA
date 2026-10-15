import React, { useEffect } from "react";

/**
 * Chat Widget component that embeds the GrowthWorks Systems AI chat widget sitewide.
 * This component is designed to be placed in the footer for global accessibility.
 *
 * The widget script is loaded from GrowthWorks Systems' widget embed endpoint.
 * The widget appears in the bottom-right corner with a chat interface.
 *
 * IMPORTANT: React does not execute inline scripts inserted via dangerouslySetInnerHTML.
 * We use document.createElement('script') inside useEffect to ensure the embed script
 * actually runs in the browser.
 */
const WIDGET_ID = "widget-1791072204257-7dcn11hk2";

const WIDGET_CONFIG: Record<string, unknown> = {
  "id": WIDGET_ID,
  "name": "Widget 1 - Mandy",
  "theme": "light",
  "enabled": true,
  "metadata": {},
  "position": "bottom-right",
  "autoOpen": false,
  "fontSize": 14,
  "agentName": "Mandy",
  "avatarUrl": "/api/upload/7e423695-7c77-46fb-99a2-30a0d90c0c30/image/82b97a60-df84-451b-982c-7d5f1b16e50c.jpg",
  "chatWidth": "normal",
  "createdAt": "2026-10-04T00:03:24.257Z",
  "textColor": "#0d0d0d",
  "updatedAt": "2026-10-13T18:06:26.411Z",
  "buttonText": "Chat with us",
  "fontFamily": "system",
  "widgetMode": "chat-voice",
  "companyName": "GrowthWorks Systems",
  "customCSS": "",
  "snapPadding": 0,
  "primaryColor": "#8A1F24",
  "targetDivId": "",
  "mountStrategy": "append",
  "snapToScreen": false,
  "placeholderText": "Continue conversation",
  "labelFontWeight": 600,
  "launcherIconUrl": "/api/upload/7e423695-7c77-46fb-99a2-30a0d90c0c30/image/798cec80-1672-4c34-8e07-1a13b2a3561e.jpg",
  "shortcutMessages": [],
  "customFontFamily": "",
  "customJavaScript": "",
  "gradientEndColor": "#e8863a",
  "launcherAnimation": "pulse",
  "gradientStartColor": "#e06b9c",
  "allowTranscriptToggle": true,
  "enableVisitorIdentity": true,
  "agentId": "8c3a488c-24ed-4136-b228-f7075bee350f",
  "apiUrl": "https://app.growthworks-systems.com",
  "stid": "7e423695-7c77-46fb-99a2-30a0d90c0c30",
};

export default function ChatWidget() {
  useEffect(() => {
    const scriptId = "gws-chat-widget-script";

    // Prevent duplicate injection if component re-renders or SSR
    if (document.getElementById(scriptId)) return;

    // Replicate the official embed IIFE pattern:
    // 1. Initialize window.VotelWidget as an array before the script runs
    // 2. Set .config synchronously
    // 3. Inject the embed script with the widget ID
    (window as unknown as Record<string, unknown[]> & {
      VotelWidget?: unknown[] & { config?: Record<string, unknown> };
    }).VotelWidget =
      (window as unknown as Record<string, unknown[]> & {
        VotelWidget?: unknown[] & { config?: Record<string, unknown> };
      }).VotelWidget || [];
    (
      window as unknown as Record<string, unknown[]> & {
        VotelWidget?: unknown[] & { config?: Record<string, unknown> };
      }
    ).VotelWidget!.config = WIDGET_CONFIG;

    // Inject the embed script
    const widgetScript = document.createElement("script");
    widgetScript.async = true;
    widgetScript.src = `https://app.growthworks-systems.com/widget/embed.js?id=${WIDGET_ID}`;
    widgetScript.id = scriptId;

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(widgetScript, firstScript);

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
