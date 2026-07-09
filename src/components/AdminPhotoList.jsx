import Button from './Button';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function AdminPhotoList({
    photos = [],
    onDelete,
    onMove,
    onDescriptionChange,
    onDragStart,
    onDrop,
    disabled = false,
}) {
    if (photos.length === 0) {
        return (
            <p className="mt-4 rounded border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
                Selected photos will appear here before they are uploaded.
            </p>
        );
    }

    return (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
            {photos.map((photo, index) => (
                <div
                    key={photo.id}
                    draggable={!disabled}
                    onDragStart={() => onDragStart(index)}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={() => onDrop(index)}
                    className="rounded border border-slate-200 bg-white p-3 shadow-sm"
                >
                    <img
                        src={photo.previewUrl}
                        alt={photo.file?.name || photo.alt || `Photo ${index + 1}`}
                        className="mb-3 aspect-square w-full rounded object-cover"
                    />
                    <div className="mb-3 min-h-10">
                        <p className="truncate text-sm font-medium text-slate-800">{photo.file?.name || photo.alt || `Existing photo ${index + 1}`}</p>
                        <p className="text-xs text-slate-500">Position {index + 1}</p>
                    </div>
                    {onDescriptionChange && (
                        <label className="mb-3 block text-xs font-medium text-slate-600">
                            Photo description
                            <textarea
                                value={photo.description || ''}
                                onChange={(event) => onDescriptionChange(photo.id, event.target.value)}
                                disabled={disabled}
                                rows="3"
                                placeholder="Optional caption"
                                className="mt-1 w-full resize-y rounded border border-slate-300 px-2 py-1 text-sm text-slate-800 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-100"
                            />
                        </label>
                    )}
                    <div className="flex gap-2">
                        <Button
                            type="button"
                            onClick={() => onMove(index, index - 1)}
                            disabled={disabled || index === 0}
                            variant="secondary"
                            size="sm"
                        >
                            <FaArrowUp />
                        </Button>
                        <Button
                            type="button"
                            onClick={() => onMove(index, index + 1)}
                            disabled={disabled || index === photos.length - 1}
                            variant="secondary"
                            size="sm"
                        >
                            <FaArrowDown />
                        </Button>
                        <Button
                            type="button"
                            onClick={() => onDelete(photo.id)}
                            disabled={disabled}
                            variant="danger"
                            size="sm"
                        >
                            X
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
