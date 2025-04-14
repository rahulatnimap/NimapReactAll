import React, { Suspense, useEffect } from 'react'
import { PATH } from '../../utils/contains'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './HomeLayout.module.scss'

const HomeLayout = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.homeLayout}>
            <nav>
                {
                    PATH.privatePaths.map((names) => 
                        <div key={names.path} onClick={() => navigate(names.path)}>
                            {names.pageName}    
                        </div>
                    )
                }
            </nav>

            <main>
                <Suspense fallback={<div>Loading content...</div>}>
                    <Outlet/>
                </Suspense>
            </main>

            <footer>
                © 2025 Your App. All rights reserved.
            </footer>
        </div>
    )
}

export default HomeLayout