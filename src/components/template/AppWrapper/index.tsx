
interface AppWrapperProps {
  children: React.ReactNode
}

const AppWrapper = (props: AppWrapperProps) => {
  const { children } = props;
  return (
    <>
      <h1>This is App Wrapper</h1>
      {children}
    </>
  )
}

export default AppWrapper;