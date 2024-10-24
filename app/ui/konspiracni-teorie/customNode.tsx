import React from 'react';
import { Handle, Position } from '@xyflow/react';

function CustomNode({ data }: { data: { label: string, isConspiracy: boolean, id: string } }) {
  const commonHandleStyle = {
    width: "30px",
    height: "30px",
    borderWidth: "2px",
    cursor: 'grab'
  };

  return (
    <div className={`p-4 rounded-lg shadow-md w-[50vw] h-auto min-h-[100px] text-2xl 
                     ${data.isConspiracy ? 'bg-red-100 border-red-300' : 'bg-green-100 border-green-300'} 
                     border-2 cursor-default`}>
      {data.isConspiracy ? (
        <Handle
          type="target"
          position={Position.Left}
          style={{ 
            ...commonHandleStyle,
            backgroundColor: "#ef4444", 
            borderColor: "#b91c1c",
          }}
        />
      ) : (
        <Handle
          type="source"
          position={Position.Right}
          style={{ 
            ...commonHandleStyle,
            backgroundColor: "#16a34a", 
            borderColor: "#166534",
          }}
        />
      )}
      <p className="text-gray-800">{data.label}</p>
    </div>
  );
}

export default CustomNode;
