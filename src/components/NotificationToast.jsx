import { useRecoilState } from "recoil"
import { notificationState } from "../notificationState" 
import { useEffect } from "react"

function NotificationToast() {
  const [noti, setNoti] = useRecoilState(notificationState)

  useEffect(() => {
    if (!noti) return

    const timer = setTimeout(() => {
      setNoti(null)
    }, 3000)

    return () => clearTimeout(timer)
  }, [noti])

  if (!noti) return null

  return <div>{noti}</div>
}

export default NotificationToast