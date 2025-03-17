import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
type DrawerButtonProps = {
  button?: React.ReactNode
  className?: string
  content?: React.ReactNode
}
const DrawerButton = ({ button, className, content }: DrawerButtonProps) => {
  return (
    <div className={className}>
      <Drawer>
        <DrawerTrigger>{button}</DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{/* Are you absolutely sure? */}</DrawerTitle>
            <DrawerDescription>
              {/* This action cannot be undone. */}
            </DrawerDescription>
          </DrawerHeader>

          {content}

          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            <DrawerClose>
              {/* <Button variant='outline'>Cancel</Button> */}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default DrawerButton
