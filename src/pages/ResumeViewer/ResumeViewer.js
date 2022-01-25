import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import ResumePDF from '../../images/resume.pdf';
import './ResumeViewer.css';

export class ResumeViewer extends React.Component {
  render() {
    return(
      <>
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js">

        <div
        className='resumeContainer'>
          <Viewer fileUrl={ResumePDF} />
        </div>

        </Worker>

      </>
    );
  }
}
