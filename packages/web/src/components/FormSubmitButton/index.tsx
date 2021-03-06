import { ComponentProps, forwardRef, ReactNode, useContext } from 'react'

import { FormLoadingContext } from '@/contexts'

import * as s from './styles'

type Props = ComponentProps<typeof s.Button> & { children: ReactNode }

export const FormSubmitButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }: Props, ref) => {
    const loading = useContext(FormLoadingContext)

    return (
      <s.Button isLoading={loading} ref={ref} {...props}>
        {!loading && <s.Text>{children}</s.Text>}
        {loading && <s.LoadingCircle src="assets/loading.svg" />}
      </s.Button>
    )
  }
)

FormSubmitButton.displayName = 'FormSubmitButton'
