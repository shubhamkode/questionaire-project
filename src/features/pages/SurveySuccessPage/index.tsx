import React from "react"
import { redirect } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store"
import { clearAppInfo } from "../../store/appState";

export default function SurveySuccess() {
  const dispatch = useAppDispatch();
  const url = import.meta.env.VITE_LEAD_SITE
  const lead = useAppSelector(store => store.app.lead)

  React.useEffect(() => {
    (async () => {
      await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(lead)
      })
    })()
    dispatch(clearAppInfo())
    redirect("/")
  }, [])

  return <div>Survey Success</div>
}
