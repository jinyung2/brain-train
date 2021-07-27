import { makeStyles, createStyles, Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import Head from 'next/head';

const useStyles = makeStyles(() => 
  createStyles({
    main: {
      width: '100%',
    }
  })
)

interface LayoutProp {
   children: ReactElement[] | ReactElement | string;
   title: string;
}

const Layout = ({children, title}: LayoutProp): ReactElement => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={classes.main}>{children}</main>
    </>
  )
}

export default Layout;