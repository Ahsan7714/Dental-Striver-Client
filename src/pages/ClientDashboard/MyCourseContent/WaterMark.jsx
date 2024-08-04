import React, { useEffect } from 'react';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import { loadUser } from '../../../store/reducers/userReducers';
import { useDispatch, useSelector } from 'react-redux';

const WaterMark = ({ fileUrl }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const renderPage = (props) => (
    <>
      {props.canvasLayer.children}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
        }}
      >
        {Array.from({ length: 3 }, (_, row) =>
          Array.from({ length: 3 }, (_, col) => (
            <div
              key={`${row}-${col}`}
              style={{
                position: 'absolute',
                top: `${row * 33.33}%`,
                left: `${col * 33.33}%`,
                width: '33.33%',
                height: '33.33%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(0, 0, 0, 0.2)',
                fontSize: `${1.5 * props.scale}rem`,
                transform: 'rotate(-40deg)',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              <div className="text-center">
                <p style={{ margin: 0 }}>{user?.name}</p>
                <p style={{ margin: 0 }}>{user?.email}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {props.annotationLayer.children}
      {props.textLayer.children}
    </>
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
        <div style={{ position: 'relative', height: '100%' }}>
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.7)',
              padding: '0.5rem',
              borderRadius: '5px',
              zIndex: 10,
            }}
          >
            <ZoomInButton />
            <ZoomOutButton />
            <ZoomPopover />
          </div>
          <Viewer 
            fileUrl={fileUrl} 
            renderPage={renderPage} 
            plugins={[zoomPluginInstance]} 
            defaultScale={SpecialZoomLevel.PageWidth} 
          />
        </div>
      </Worker>
    </div>
  );
};

export default WaterMark;
