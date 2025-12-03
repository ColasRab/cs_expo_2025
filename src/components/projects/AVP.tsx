"use client";

import React from "react";

type AVPProps = {
  videoLink: string;
};

/**
 * Convert a Google Drive share URL into an embeddable preview URL.
 * Supports formats like:
 * - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * - https://drive.google.com/open?id=FILE_ID
 * - https://drive.google.com/uc?id=FILE_ID&export=download
 */
function getDrivePreviewUrl(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("drive.google.com")) {
      // Check for /file/d/FILE_ID pattern
      const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }

      // Check for id=FILE_ID query param
      const id = u.searchParams.get("id");
      if (id) {
        return `https://drive.google.com/file/d/${id}/preview`;
      }

      // Already a drive url but unknown format — return as-is (best-effort)
      return url;
    }
  } catch (e) {
    // Not a valid URL — fall through and return original
  }

  return url;
}

export default function AVP({ videoLink }: AVPProps) {
  const src = getDrivePreviewUrl(videoLink);

  return (
    <div className="w-full max-w-[1366px] px-4 mx-auto">
      <div className="aspect-video w-full overflow-hidden border-2 border-[#000000]">
        <iframe
          src={src}
          title="Project Video Showcase"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
