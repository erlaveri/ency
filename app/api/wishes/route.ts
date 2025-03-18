export const dynamic = 'force-dynamic';

import {getFirestore} from 'firebase-admin/firestore';

export async function GET() {

  const snapshot = await getFirestore().collection('wishes').get()

  return Response.json({items: snapshot.docs})
}