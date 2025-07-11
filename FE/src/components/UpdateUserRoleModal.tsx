import React from 'react';

interface UpdateUserRoleModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUpdateRole: (newRole: string) => void;
    currentRole: string;
}

const UpdateUserRoleModal: React.FC<UpdateUserRoleModalProps> = ({ isOpen, onClose, onUpdateRole, currentRole }) => {
    const [selectedRole, setSelectedRole] = React.useState(currentRole);

    React.useEffect(() => {
        setSelectedRole(currentRole);
    }, [currentRole]);

    if (!isOpen) {
        return null;
    }

    const handleUpdate = () => {
        onUpdateRole(selectedRole);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Cập nhật vai trò</h3>
                    <div className="mt-2 px-7 py-3">
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        >
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                            <option value="Moderator">Moderator</option>
                        </select>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            id="ok-btn"
                            onClick={handleUpdate}
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Cập nhật
                        </button>
                        <button
                            onClick={onClose}
                            className="mt-3 px-4 py-2 bg-gray-200 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Hủy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserRoleModal; 