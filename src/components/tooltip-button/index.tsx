import React, { PropsWithChildren } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { Button } from '../ui/button'

type TooltipButtonProps = PropsWithChildren & {
  className?: string
  button?: React.ReactNode
  buttonText?: string
  icon?: React.ReactNode
}

const TooltipButton = ({
  children,
  button,
  icon,
  className,
  buttonText,
}: TooltipButtonProps) => {
  return (
    <div className={className}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {button ? (
              button
            ) : (
              <Button
                variant='ghost'
                className='inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-sm font-medium hover:bg-gray-200/60'
              >
                {buttonText} {icon ? icon : 'Hover'}
              </Button>
            )}
          </TooltipTrigger>
          <TooltipContent className='text-sm'>
            {children ? children : <p>children</p>}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default TooltipButton
