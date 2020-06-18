// const { Layout } = require("antd")
import Head from 'next/head';
import Navbar from './Navbar'
const Layout = (props) => (
        <div>
                <Head>
                    <title>Todo App</title>
                </Head>
                <Navbar/>
        </div>
)
export default Layout;