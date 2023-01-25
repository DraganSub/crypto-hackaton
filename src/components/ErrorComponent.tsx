import { Alert } from "antd";

export default function ErrorComponent() {
  return (
    <Alert
      message="Error"
      description="Oops, something went wrong. Please try again later."
      type="error"
    />
  )
}