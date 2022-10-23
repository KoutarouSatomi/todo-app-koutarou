import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from '../components/AppContent';
import AppHeader from '../components/AppHeader';
// import PageTItle from './components/PageTItle';
import styles from '../styles/modules/app.module.scss';
import '../styles/css/app.css';

function Todos() {
  return (
    <div>
      <div className="container">
        {/* <PageTItle>TODO LIST</PageTItle> */}
        <div className="container1">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter">YOUR'S PLAN TODAY</h3>
            </div>
          </div>
        </div>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </div>
  );
}

export default Todos;
