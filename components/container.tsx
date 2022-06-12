import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

export const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="max-w-2xl mx-auto px-5">{children}</div>
}
