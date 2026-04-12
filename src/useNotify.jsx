import { useSetRecoilState } from "recoil"
import { notificationState } from "./notificationState"

function useNotify() {
  const setNoti = useSetRecoilState(notificationState)

  const notify = (msg) => {
    setNoti(msg)
  }

  return notify
}

export default useNotify