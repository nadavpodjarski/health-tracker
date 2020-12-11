import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Dialog } from '@material-ui/core'
import { useSpring, animated } from 'react-spring/web.cjs' // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      modal: {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center'
      },
      paper: {
         backgroundColor: theme.palette.background.paper,
         boxShadow: theme.shadows[5],
         padding: theme.spacing(2, 4, 3),
         overflow: 'none'
      },
      paperWidthSm: {
         width: ({ width }: any) => width,
         maxWidth: ({ width }: any) => width
      }
   })
)

interface FadeProps {
   children?: React.ReactElement
   in: boolean
   onEnter?: () => {}
   onExited?: () => {}
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
   props,
   ref
) {
   const { in: open, children, onEnter, onExited, ...other } = props
   const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
         if (open && onEnter) {
            onEnter()
         }
      },
      onRest: () => {
         if (!open && onExited) {
            onExited()
         }
      }
   })

   return (
      <animated.div ref={ref} style={style} {...other}>
         {children}
      </animated.div>
   )
})

const SpringModal: FC<{
   open: boolean
   modalToggler: () => void
   width?: number | string
}> = ({ children, open, modalToggler, width }) => {
   const classes = useStyles({ width })

   return (
      <Dialog
         open={open}
         onClose={modalToggler}
         classes={{
            paperWidthSm: classes.paperWidthSm
         }}
      >
         <Fade in={open}>
            <div className={classes.paper}>{children}</div>
         </Fade>
      </Dialog>
   )
}

export default SpringModal
