const { Client, PrivateKey, AccountId, ContractExecuteTransaction } = require('@hashgraph/sdk');

const operatorId = process.env.HEDERA_ACCOUNT_ID;
const operatorKey = PrivateKey.fromString(process.env.HEDERA_PRIVATE_KEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

exports.createProposal = async (req, res) => {
  const { title, description } = req.body;

  try {
    // placeholder: log to simulate Hedera interaction
    console.log(`Proposal: ${title}\n${description}`);

    // Real Hedera call would go here
    res.json({ message: 'Proposal created on Hedera (simulated)' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hedera proposal creation failed' });
  }
};
