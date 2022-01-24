import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ResumePic from '../../images/resume.pdf';

export class ResumePdf extends React.Component {
  render() {
    return(
      <PDFViewer>
        <iframe src={ ResumePic } width="100%" height="100%">
        </iframe>
      </PDFViewer>
    );
  }
}
